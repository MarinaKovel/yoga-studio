import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pose } from '../../../interfaces/pose.interface';
import { YogaPoseService } from '../../../share/services/yoga-pose.service';

@Component({
  selector: 'app-pose-tracker',
  templateUrl: './pose-tracker.component.html',
  styleUrl: './pose-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoseTrackerComponent {
  yogaForm: FormGroup;
  showSubmit: boolean = false;
  showResult: boolean = false;
  result: Pose[] = [];
  level: number = 1;

  constructor(private fb: FormBuilder, private yogaPoseService: YogaPoseService) {
    this.yogaForm = this.fb.group({
      poses: this.fb.array([]),
    });

    this.yogaPoseService.getUser().subscribe(
      (user) => this.level = user.level
    )
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
    
    const fullDuration = this.result.reduce((acc, currentVal: Pose) =>  acc + currentVal.duration, 0)
    if (fullDuration > 30) {
      this.level = fullDuration < 100 ? 2 : 3;
    }
  }
}
