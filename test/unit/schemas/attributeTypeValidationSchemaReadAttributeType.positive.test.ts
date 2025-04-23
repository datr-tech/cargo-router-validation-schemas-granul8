import { attributeTypeValidationSchemaReadAttributeType } from '@app-crvsg/schemas';

describe('attributeTypeValidationSchemaReadAttributeType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        attributeTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...attributeTypeValidationSchemaReadAttributeType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
