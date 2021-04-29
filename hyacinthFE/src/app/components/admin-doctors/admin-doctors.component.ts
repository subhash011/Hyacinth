import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-admin-doctors',
    templateUrl: './admin-doctors.component.html',
    styleUrls: ['./admin-doctors.component.scss']
})
export class AdminDoctorsComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    displayedColumns: string[] = ['ID', 'email', 'name', 'phone', 'sex'];
    dataSource = new MatTableDataSource([]);

    getDoctors() {
        let url = environment.apiUrl + "doctor";
        return this.http.get(url);
    }

    ngOnInit(): void {
        this.getDoctors().subscribe(result => {
            this.dataSource.data = result as Array<Object>;
        })
    }

}
