import { TestBed } from '@angular/core/testing';

import { AssessmentSubmissionService } from './assessment-submission.service';

describe('AssessmentSubmissionService', () => {
  let service: AssessmentSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
