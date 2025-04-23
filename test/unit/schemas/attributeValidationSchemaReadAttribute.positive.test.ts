import { attributeValidationSchemaReadAttribute } from '@app-crvsg/schemas';

describe('attributeValidationSchemaReadAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        attributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...attributeValidationSchemaReadAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
