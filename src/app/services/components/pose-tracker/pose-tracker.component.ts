import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pose } from '../../../interfaces/pose.interface';

@Component({
  selector: 'app-pose-tracker',
  templateUrl: './pose-tracker.component.html',
  styleUrl: './pose-tracker.component.scss'
})
export class PoseTrackerComponent {
  yogaForm: FormGroup;
  showSubmit: boolean = false;
  showResult: boolean = false;
  result: Pose[] = [];

  constructor(private fb: FormBuilder) {
    this.yogaForm = this.fb.group({
      poses: this.fb.array([]),
    });
  }

  get poses() {
    return this.yogaForm.get('poses') as FormArray;
  }

  addPose() {
    this.showSubmit = true;
    const poseGroup = this.fb.group({
      name: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
    this.poses.push(poseGroup);
  
  }

  removePose(index: number) {
    this.poses.removeAt(index);
  }

  onSubmit() {
    this.showResult = true;
    this.result = this.yogaForm.value.poses;
  }
}
