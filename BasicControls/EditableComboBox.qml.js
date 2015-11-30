var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFile("BasicControls/ComboBox.qml")

var node, objects, obj

node = qml.root.node
node.object("Keys.onLeftPressed", null)
node.object("Keys.onRightPressed", null)
node.object("editable", "true")

node = qml.getObjectById("mouseArea").node
node.object("anchors.fill", null)
node.object("anchors.right", "parent.right")
node.object("anchors.top", "parent.top")
node.object("anchors.bottom", "parent.bottom")
node.object("width", "20")

ModAPI.add("BasicControls/EditableComboBox.qml", qml.code)
