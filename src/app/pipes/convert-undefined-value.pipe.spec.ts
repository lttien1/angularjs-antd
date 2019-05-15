import { ConvertUndefinedValuePipe } from './convert-undefined-value.pipe';

describe('ConvertUndefinedValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertUndefinedValuePipe();
    expect(pipe).toBeTruthy();
  });
});
