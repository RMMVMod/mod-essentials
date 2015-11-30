var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("BasicControls/ComboBox.qml")

var node, objects, obj

node = qml.root.node
node.object("Keys.onLeftPressed", "{ ; }")
node.object("Keys.onRightPressed", "{ ; }")
node.object("editable", "true")

node = qml.getObjectById("mouseArea").node
node.object("anchors.fill", "20").name = "width"
node.object("anchors.right", "parent.right")
node.object("anchors.top", "parent.top")
node.object("anchors.bottom", "parent.bottom")

ModAPI.add("BasicControls/EditableComboBox.qml", qml.code)
