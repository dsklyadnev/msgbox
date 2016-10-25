# msgbox
AngularJS message box based on Semantic-UI framework. Other UI framework can be intergrated quite easy.

## Usage

Declare the html tag

```html
<msg-box id="mbox" header="Message Box" actions="msgBoxActions">
  Is this a message box?
</msg-box>
```

and specify the actions (buttons) of the message box

```js
$scope.msgBoxActions = [{
    text: 'Yes',
    btnClass: 'positive',
    icon: 'checkmark'
  }, {
    text: 'No',
    btnClass: 'deny'
  }, {
    text: 'Don't know'
  }
];
```

Use the factory to show message box

```js
msgbox.show('mbox');
```
