import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DataTable} from "./DataTable";
import {DefaultSorter, SortOnKeypressDirective} from "./DefaultSorter";
import {Paginator} from "./Paginator";
import {BootstrapPaginator} from "./BootstrapPaginator";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator,
        SortOnKeypressDirective,
    ],
    exports: [
        DataTable,
        DefaultSorter,
        Paginator,
        BootstrapPaginator
    ]
})
export class DataTableModule {

}
