import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BooksRoutingModule} from "./books-routing.module";
import {BooksListComponent} from "./pages/books-list/books-list.component";
import {MaterialModule} from "../common/modules/material.module";

@NgModule({
    declarations: [
        BooksListComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        MaterialModule
    ]
})
export class BooksModule {
}
