import QtQuick 2.3
import QtQuick.Controls 1.2
import "../BasicControls"

Labeler {
    id: root

    property alias fontFamily: item.fontFamily
    property alias fontSize: item.fontSize
    property alias model: item.model
    property alias currentIndex: item.currentIndex
    property alias currentText: item.currentText
    property alias editText: item.editText
    property alias count: item.count

    control: item

    EditableComboBox {
        id: item
        title: root.title
        hint: root.hint
        hintComponent: root.hintComponent
        width: root.itemWidth
    }

    function select(text) {
        currentIndex = item.find(text);
    }
}
