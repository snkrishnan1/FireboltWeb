import { Renderer, ElementRef, QueryList, AfterContentInit } from '@angular/core';
import { MdLine, MdLineSetter } from '@angular2-material/core';
export declare class MdGridTile {
    private _renderer;
    private _element;
    _rowspan: number;
    _colspan: number;
    constructor(_renderer: Renderer, _element: ElementRef);
    rowspan: number;
    colspan: number;
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property: string, value: string): void;
}
export declare class MdGridTileText implements AfterContentInit {
    private _renderer;
    private _element;
    /**
     *  Helper that watches the number of lines in a text area and sets
     * a class on the host element that matches the line count.
     */
    _lineSetter: MdLineSetter;
    _lines: QueryList<MdLine>;
    constructor(_renderer: Renderer, _element: ElementRef);
    ngAfterContentInit(): void;
}
