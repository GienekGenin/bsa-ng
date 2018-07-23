import { TestBed, async, inject } from '@angular/core/testing';

import { NewPassGuard } from './new-pass.guard';

describe('NewPassGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPassGuard]
    });
  });

  it('should ...', inject([NewPassGuard], (guard: NewPassGuard) => {
    expect(guard).toBeTruthy();
  }));
});
