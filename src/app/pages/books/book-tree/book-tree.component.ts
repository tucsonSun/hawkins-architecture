import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor() {}
}



@Component({
  selector: 'app-book-tree',
  templateUrl: './book-tree.component.html',
  styleUrls: ['./book-tree.component.scss']
})
export class BookTreeComponent implements OnInit, OnDestroy {
  constructor() {
  }


  ngOnDestroy() {

  }

  ngOnInit() {}

  section(node: DynamicFlatNode) {

  }
}
