import {Component, Directive, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {DataTable, SortBy, SortEvent} from "./DataTable";

@Component({
    selector: "mfDefaultSorter",
    template: `
        <a style="cursor: pointer" (click)="sort()" (sortOnKeypress)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            <span *ngIf="!isSortedByMeAsc && !isSortedByMeDesc" class="fe-bold-transform90 fe-code" aria-hidden="true" aria-label="none"></span>
            <span *ngIf="isSortedByMeAsc" class="fe-bold-black fe-chevron-up" aria-hidden="true" aria-label="asc"></span>
            <span *ngIf="isSortedByMeDesc" class="fe-bold-black fe-chevron-down" aria-hidden="true" aria-label="desc"></span>
        </a>`
})
export class DefaultSorter implements OnInit {
    @Input("by") sortBy: SortBy;

    isSortedByMeAsc = false;
    isSortedByMeDesc = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit(): void {
        this.mfTable.onSortChange.subscribe((event: SortEvent) => {
            /* eslint-disable eqeqeq */
            this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder === "asc");
            this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder === "desc");
            /* eslint-enable eqeqeq */
        });
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        } else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
        return false;
    }
}

@Directive({
    selector: '[sortOnKeypress]'
})
export class SortOnKeypressDirective {

    @Output() sortOnKeypress: EventEmitter<void> = new EventEmitter();

    constructor() { }

    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const key = event.key;
        if (key === 'Enter' || key === 'Space') {
            this.sortOnKeypress.emit();
        }
    }
}
