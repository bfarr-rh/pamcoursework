{"id":"90dcbced-0fa8-4d0c-8d1c-1d72077f9b26","name":"solarvillage.NewOrderPermiiting-taskform.frm","model":{"processName":"NewOrderPermiiting","processId":"solarvillage.NewOrderPermiiting","name":"process","properties":[{"name":"ElectricPermit","typeInfo":{"type":"OBJECT","className":"com.redhat.bfarr.solarvillage.datamodel.ElectricPermit","multiple":false},"metaData":{"entries":[]}},{"name":"HoaMember","typeInfo":{"type":"BASE","className":"java.lang.Boolean","multiple":false},"metaData":{"entries":[]}},{"name":"NewOrder","typeInfo":{"type":"OBJECT","className":"com.redhat.bfarr.solarvillage.businessprocess.NewOrder","multiple":false},"metaData":{"entries":[]}},{"name":"StructuralPermit","typeInfo":{"type":"OBJECT","className":"com.redhat.bfarr.solarvillage.datamodel.StructuralPermit","multiple":false},"metaData":{"entries":[]}}],"formModelType":"org.kie.workbench.common.forms.jbpm.model.authoring.process.BusinessProcessFormModel"},"fields":[{"nestedForm":"61fb6670-0a27-4589-b18a-d22fa8e1d389","container":"FIELD_SET","id":"field_858966427585443E11","name":"NewOrder","label":"NewOrder","required":false,"readOnly":false,"validateOnChange":true,"binding":"NewOrder","standaloneClassName":"com.redhat.bfarr.solarvillage.businessprocess.NewOrder","code":"SubForm","serializedFieldClassName":"org.kie.workbench.common.forms.fields.shared.fieldTypes.relations.subForm.definition.SubFormFieldDefinition"}],"layoutTemplate":{"version":2,"style":"FLUID","layoutProperties":{},"rows":[{"height":"12","properties":{},"layoutColumns":[{"span":"12","height":"12","properties":{},"rows":[],"layoutComponents":[{"dragTypeName":"org.kie.workbench.common.forms.editor.client.editor.rendering.EditorFieldLayoutComponent","properties":{"field_id":"field_858966427585443E11","form_id":"90dcbced-0fa8-4d0c-8d1c-1d72077f9b26"}}]}]}]}}