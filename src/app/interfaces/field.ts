interface ValidationRule {
  type: string;
  languageCode: string;
  regex: string;
  description: string;
}

export interface Field {
  createdBy: string;
  createdTime: Date;
  default: boolean;
  defaultName: string;
  hideOnForm: boolean;
  id: string;
  name: string;
  required: boolean;
  show: boolean;
  type: boolean;
  updatedBy: string;
  updatedTime: Date;
  validationRules: Array<ValidationRule>;
}
