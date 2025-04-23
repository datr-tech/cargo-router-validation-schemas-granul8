import { attributeTypeValidationSchemaDeleteAttributeType } from '../../../dist';

describe('attributeTypeValidationSchemaDeleteAttributeType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        attributeTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...attributeTypeValidationSchemaDeleteAttributeType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
