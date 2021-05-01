import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit, OnDestroy {

    role: string = "";
    head: string = "";

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    displayedColumns: string[] = [];
    dataSource = new MatTableDataSource([]);
    private ngUnsubscribe: Subject<any> = new Subject();

    getUsers() {
        let url = environment.apiUrl + this.role;
        return this.http.get(url);
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ngOnInit(): void {
        this.route.params
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(params => {
                this.role = params['role']
                this.head = this.capitalizeFirstLetter(this.role) + "s";
                this.getUsers().subscribe(result => {
                    for (const res of result as Array<Object>) {
                        res['link'] = this.role + "/" + res['id'];
                    }
                    console.log(result);
                    this.dataSource.data = result as Array<Object>;
                    this.displayedColumns = Object.keys(result[0]);
                });
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
