{"id":"4f8b66fc-6175-4471-88f3-5773d81a118c","name":"Task-taskform.frm","model":{"taskName":"Task","processId":"solarvillage.NewOrderPermiiting","name":"task","properties":[{"name":"HoaApproval","typeInfo":{"type":"OBJECT","className":"com.redhat.bfarr.solarvillage.datamodel.HoaApproval","multiple":false},"metaData":{"entries":[{"name":"field-readOnly","value":true}]}},{"name":"NewOrder","typeInfo":{"type":"OBJECT","className":"com.redhat.bfarr.solarvillage.businessprocess.NewOrder","multiple":false},"metaData":{"entries":[{"name":"field-readOnly","value":true}]}}],"formModelType":"org.kie.workbench.common.forms.jbpm.model.authoring.task.TaskFormModel"},"fields":[{"options":[{"value":"Approved","text":"Approved"},{"value":"Denied","text":"Denied"}],"defaultValue":"Approved","inline":false,"dataProvider":"","id":"field_813","name":"HoaApproval.status","label":"Hoa Approval","required":true,"readOnly":false,"validateOnChange":true,"helpMessage":"","binding":"HoaApproval.status","standaloneClassName":"java.lang.String","code":"RadioGroup","serializedFieldClassName":"org.kie.workbench.common.forms.fields.shared.fieldTypes.basic.selectors.radioGroup.definition.StringRadioGroupFieldDefinition"}],"layoutTemplate":{"version":2,"style":"FLUID","layoutProperties":{},"rows":[{"height":"12","properties":{},"layoutColumns":[{"span":"12","height":"12","properties":{},"rows":[],"layoutComponents":[{"dragTypeName":"org.uberfire.ext.plugin.client.perspective.editor.layout.editor.HTMLLayoutDragComponent","properties":{"HTML_CODE":"\u003ch3\u003eInputs:\u003c/h3\u003e"}}]}]},{"height":"12","properties":{},"layoutColumns":[{"span":"12","height":"12","properties":{},"rows":[],"layoutComponents":[{"dragTypeName":"org.kie.workbench.common.forms.editor.client.editor.rendering.EditorFieldLayoutComponent","properties":{"field_id":"field_813","form_id":"4f8b66fc-6175-4471-88f3-5773d81a118c"}}]}]}]}}