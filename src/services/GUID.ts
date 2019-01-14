import uuidv4 from "uuid/v4";

export interface GenerateGuidOptions {
  version: 4
}

export class GUIDService {
  generateGuid(options: GenerateGuidOptions): string {
    switch (options.version) {
      case 4:
        return uuidv4();
        break;
    }
  }
}