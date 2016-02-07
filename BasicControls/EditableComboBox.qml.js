var ModAPI = require('modapi')
var _ = require('lodash')
var qml = ModAPI.QMLFileV2("BasicControls/ComboBox.qml")

var node, objects, obj

qml.root
  .remove("Keys.onLeftPressed")
  .remove("Keys.onRightPressed")
  .set("editable", "true")

qml.root.getObjectById("mouseArea")
  .remove("anchors.fill")
  .set("anchors.right", "parent.right").end()
  .set("anchors.top", "parent.top").end()
  .set("anchors.bottom", "parent.bottom").end()
  .set("width", "20").end()

ModAPI.add("BasicControls/EditableComboBox.qml", qml.GenCode())
