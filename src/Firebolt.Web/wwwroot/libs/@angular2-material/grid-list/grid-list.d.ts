import { ModuleWithProviders, AfterContentChecked, OnInit, QueryList, Renderer, ElementRef } from '@angular/core';
import { MdGridTile } from './grid-tile';
import { Dir } from '@angular2-material/core';
export declare class MdGridList implements OnInit, AfterContentChecked {
    private _renderer;
    private _element;
    private _dir;
    /** Number of columns being rendered. */
    private _cols;
    /**
     * Row height value passed in by user. This can be one of three types:
     * - Number value (ex: "100px"):  sets a fixed row height to that value
     * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
     * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
     */
    private _rowHeight;
    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
    private _gutter;
    /** Sets position and size styles for a tile */
    private _tileStyler;
    /** Query list of tiles that are being rendered. */
    _tiles: QueryList<MdGridTile>;
    constructor(_renderer: Renderer, _element: ElementRef, _dir: Dir);
    cols: any;
    gutterSize: any;
    /** Set internal representation of row height from the user-provided value. */
    rowHeight: string | number;
    /** TODO: internal */
    ngOnInit(): void;
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * TODO: internal
     */
    ngAfterContentChecked(): void;
    /** Throw a friendly error if cols property is missing */
    private _checkCols();
    /** Default to equal width:height if rowHeight property is missing */
    private _checkRowHeight();
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    private _setTileStyler();
    /** Computes and applies the size and position for all children grid tiles. */
    private _layoutTiles();
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style: [string, string]): void;
}
export declare class MdGridListModule {
    static forRoot(): ModuleWithProviders;
}
