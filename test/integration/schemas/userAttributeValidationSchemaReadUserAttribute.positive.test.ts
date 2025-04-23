import { userAttributeValidationSchemaReadUserAttribute } from '../../../dist';

describe('userAttributeValidationSchemaReadUserAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userAttributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userAttributeValidationSchemaReadUserAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
