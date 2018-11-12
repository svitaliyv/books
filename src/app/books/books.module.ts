import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BooksRoutingModule} from "./books-routing.module";
import {BooksListComponent} from "./pages/books-list/books-list.component";
import {MaterialModule} from "../common/modules/material.module";
import {BookViewComponent} from "./pages/books-list/book-view/book-view.component";

@NgModule({
    declarations: [
        BooksListComponent,
        BookViewComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        MaterialModule
    ]
})
export class BooksModule {
}
