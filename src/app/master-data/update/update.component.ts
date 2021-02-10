import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UpdateType } from '../../_shared/enum/update-type.enum';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input() updateType: UpdateType = UpdateType.ADD;
  @Input() data: any;

  formGroup: FormGroup;
  UPDATE_TYPE_ENUM = UpdateType;

  constructor(private modalRef: BsModalRef,
              private masterDataStore: AngularFirestore) {
    // init form
    this.formGroup = new FormGroup({
      'name': new FormControl(null),
      'active': new FormControl(false)
    });
  }

  ngOnInit(): void {
    if (this.updateType !== UpdateType.ADD) {
      this.setFormValue(this.data);
    }
  }

  private setFormValue(data: any) {
    this.formGroup.patchValue({
      name: data.name,
      active: data.active
    });
  }

  public onSubmit() {
    const value = this.formGroup.value;
    const data: any = {
      name: value.name,
      active: value.active
    };
    if (this.updateType === UpdateType.ADD) { // add
      this.save(data).finally(() => {
        console.log('Saved');
      });
    } else if (this.updateType === UpdateType.EDIT) { // edit
      this.update(this.data.id, data).finally(() => {
        console.log('Updated')
      });
    }
  }

  public onDelete() {
    this.delete(this.data.id).finally(() => {
      console.log('Deleted');
    });
  }

  private save(data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.masterDataStore
        .collection('/item-type')
        .add(data)
        .then(() => { this.hideModal() }, err => reject(err));
    });
  }

  private update(id: string, data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.masterDataStore
        .collection('/item-type')
        .doc(id)
        .set(data)
        .then(() => { this.hideModal() }, err => reject(err));
    });
  }

  private delete(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.masterDataStore
        .collection('/item-type')
        .doc(id)
        .delete()
        .then(() => { this.hideModal() }, err => reject(err));
    });
  }

  public hideModal() {
    this.modalRef.hide();
  }

}
