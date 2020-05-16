import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  constructor() {}


  ngOnDestroy() {

  }

  ngOnInit() {
  }

  rebuildForm() {

  }

  revert() {
  }
  async saveBookChanges() {
  }
}
