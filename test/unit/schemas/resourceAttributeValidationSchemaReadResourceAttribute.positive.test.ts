import { resourceAttributeValidationSchemaReadResourceAttribute } from '@app-crvsg/schemas';

describe('resourceAttributeValidationSchemaReadResourceAttribute', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceAttributeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceAttributeValidationSchemaReadResourceAttribute };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
