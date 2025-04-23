import { userAttributeValidationSchemaDeleteUserAttribute } from '../../../dist';

describe('userAttributeValidationSchemaDeleteUserAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        userAttributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...userAttributeValidationSchemaDeleteUserAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
