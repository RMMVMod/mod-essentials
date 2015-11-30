var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("BasicControls/ComboBox.qml")

var node, objects, obj

node = qml.root.node
objects = node.objects
_.find(objects, {name: "Keys.onLeftPressed"}).value = "{}"
_.find(objects, {name: "Keys.onRightPressed"}).value = "{}"

obj = node.newObject()
obj.name = "editable"
obj.value = "true"

node = qml.getObjectById("mouseArea").node
objects = node.objects

obj = _.find(objects, {name: "anchors.fill"})
obj.name = "width"
obj.value = "20"

obj = node.newObject()
obj.name = "anchors.right"
obj.value = "parent.right"

obj = node.newObject()
obj.name = "anchors.top"
obj.value = "parent.top"

obj = node.newObject()
obj.name = "anchors.bottom"
obj.value = "parent.bottom"

ModAPI.add("BasicControls/EditableComboBox.qml", qml.code)