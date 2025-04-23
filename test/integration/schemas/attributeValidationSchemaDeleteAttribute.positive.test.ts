import { attributeValidationSchemaDeleteAttribute } from '../../../dist';

describe('attributeValidationSchemaDeleteAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        attributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...attributeValidationSchemaDeleteAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
