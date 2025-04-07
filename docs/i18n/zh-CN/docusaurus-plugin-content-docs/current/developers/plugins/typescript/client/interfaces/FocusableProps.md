[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: FocusableProps

Defined in: [src/components/Focusable.ts:7](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L7)

## Extends

- `HTMLAttributes`\<`HTMLDivElement`\>.[`FooterLegendProps`](FooterLegendProps.md)

## Properties

### about?

```ts
optional about: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1776

#### Inherited from

```ts
HTMLAttributes.about
```

***

### accessKey?

```ts
optional accessKey: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1752

#### Inherited from

```ts
HTMLAttributes.accessKey
```

***

### actionDescriptionMap?

```ts
optional actionDescriptionMap: ActionDescriptionMap;
```

Defined in: [src/components/FooterLegend.ts:53](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L53)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`actionDescriptionMap`](FooterLegendProps.md#actiondescriptionmap)

***

### aria-activedescendant?

```ts
optional aria-activedescendant: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1559

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

```ts
HTMLAttributes.aria-activedescendant
```

***

### aria-atomic?

```ts
optional aria-atomic: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1561

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

```ts
HTMLAttributes.aria-atomic
```

***

### aria-autocomplete?

```ts
optional aria-autocomplete: "inline" | "none" | "list" | "both";
```

Defined in: node\_modules/@types/react/index.d.ts:1566

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

```ts
HTMLAttributes.aria-autocomplete
```

***

### aria-busy?

```ts
optional aria-busy: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1568

Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

#### Inherited from

```ts
HTMLAttributes.aria-busy
```

***

### aria-checked?

```ts
optional aria-checked: boolean | "true" | "false" | "mixed";
```

Defined in: node\_modules/@types/react/index.d.ts:1573

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

```ts
HTMLAttributes.aria-checked
```

***

### aria-colcount?

```ts
optional aria-colcount: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1578

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

```ts
HTMLAttributes.aria-colcount
```

***

### aria-colindex?

```ts
optional aria-colindex: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1583

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

```ts
HTMLAttributes.aria-colindex
```

***

### aria-colspan?

```ts
optional aria-colspan: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1588

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

```ts
HTMLAttributes.aria-colspan
```

***

### aria-controls?

```ts
optional aria-controls: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1593

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

```ts
HTMLAttributes.aria-controls
```

***

### aria-current?

```ts
optional aria-current: boolean | "time" | "step" | "true" | "false" | "page" | "location" | "date";
```

Defined in: node\_modules/@types/react/index.d.ts:1595

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

```ts
HTMLAttributes.aria-current
```

***

### aria-describedby?

```ts
optional aria-describedby: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1600

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

```ts
HTMLAttributes.aria-describedby
```

***

### aria-details?

```ts
optional aria-details: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1605

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

```ts
HTMLAttributes.aria-details
```

***

### aria-disabled?

```ts
optional aria-disabled: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1610

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

```ts
HTMLAttributes.aria-disabled
```

***

### ~~aria-dropeffect?~~

```ts
optional aria-dropeffect: "none" | "link" | "copy" | "execute" | "move" | "popup";
```

Defined in: node\_modules/@types/react/index.d.ts:1615

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

```ts
HTMLAttributes.aria-dropeffect
```

***

### aria-errormessage?

```ts
optional aria-errormessage: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1620

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

```ts
HTMLAttributes.aria-errormessage
```

***

### aria-expanded?

```ts
optional aria-expanded: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1622

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

```ts
HTMLAttributes.aria-expanded
```

***

### aria-flowto?

```ts
optional aria-flowto: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1627

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

```ts
HTMLAttributes.aria-flowto
```

***

### ~~aria-grabbed?~~

```ts
optional aria-grabbed: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1632

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

```ts
HTMLAttributes.aria-grabbed
```

***

### aria-haspopup?

```ts
optional aria-haspopup: 
  | boolean
  | "dialog"
  | "menu"
  | "grid"
  | "true"
  | "false"
  | "listbox"
  | "tree";
```

Defined in: node\_modules/@types/react/index.d.ts:1634

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

```ts
HTMLAttributes.aria-haspopup
```

***

### aria-hidden?

```ts
optional aria-hidden: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1639

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

```ts
HTMLAttributes.aria-hidden
```

***

### aria-invalid?

```ts
optional aria-invalid: boolean | "true" | "false" | "grammar" | "spelling";
```

Defined in: node\_modules/@types/react/index.d.ts:1644

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

```ts
HTMLAttributes.aria-invalid
```

***

### aria-keyshortcuts?

```ts
optional aria-keyshortcuts: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1646

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

```ts
HTMLAttributes.aria-keyshortcuts
```

***

### aria-label?

```ts
optional aria-label: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1651

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

```ts
HTMLAttributes.aria-label
```

***

### aria-labelledby?

```ts
optional aria-labelledby: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1656

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

```ts
HTMLAttributes.aria-labelledby
```

***

### aria-level?

```ts
optional aria-level: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1658

Defines the hierarchical level of an element within a structure.

#### Inherited from

```ts
HTMLAttributes.aria-level
```

***

### aria-live?

```ts
optional aria-live: "off" | "assertive" | "polite";
```

Defined in: node\_modules/@types/react/index.d.ts:1660

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

```ts
HTMLAttributes.aria-live
```

***

### aria-modal?

```ts
optional aria-modal: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1662

Indicates whether an element is modal when displayed.

#### Inherited from

```ts
HTMLAttributes.aria-modal
```

***

### aria-multiline?

```ts
optional aria-multiline: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1664

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

```ts
HTMLAttributes.aria-multiline
```

***

### aria-multiselectable?

```ts
optional aria-multiselectable: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1666

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

```ts
HTMLAttributes.aria-multiselectable
```

***

### aria-orientation?

```ts
optional aria-orientation: "horizontal" | "vertical";
```

Defined in: node\_modules/@types/react/index.d.ts:1668

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

```ts
HTMLAttributes.aria-orientation
```

***

### aria-owns?

```ts
optional aria-owns: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1674

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

```ts
HTMLAttributes.aria-owns
```

***

### aria-placeholder?

```ts
optional aria-placeholder: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1679

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

```ts
HTMLAttributes.aria-placeholder
```

***

### aria-posinset?

```ts
optional aria-posinset: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1684

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

```ts
HTMLAttributes.aria-posinset
```

***

### aria-pressed?

```ts
optional aria-pressed: boolean | "true" | "false" | "mixed";
```

Defined in: node\_modules/@types/react/index.d.ts:1689

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

```ts
HTMLAttributes.aria-pressed
```

***

### aria-readonly?

```ts
optional aria-readonly: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1694

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

```ts
HTMLAttributes.aria-readonly
```

***

### aria-relevant?

```ts
optional aria-relevant: 
  | "text"
  | "all"
  | "additions"
  | "additions removals"
  | "additions text"
  | "removals"
  | "removals additions"
  | "removals text"
  | "text additions"
  | "text removals";
```

Defined in: node\_modules/@types/react/index.d.ts:1699

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

```ts
HTMLAttributes.aria-relevant
```

***

### aria-required?

```ts
optional aria-required: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1701

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

```ts
HTMLAttributes.aria-required
```

***

### aria-roledescription?

```ts
optional aria-roledescription: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1703

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

```ts
HTMLAttributes.aria-roledescription
```

***

### aria-rowcount?

```ts
optional aria-rowcount: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1708

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

```ts
HTMLAttributes.aria-rowcount
```

***

### aria-rowindex?

```ts
optional aria-rowindex: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1713

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

```ts
HTMLAttributes.aria-rowindex
```

***

### aria-rowspan?

```ts
optional aria-rowspan: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1718

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

```ts
HTMLAttributes.aria-rowspan
```

***

### aria-selected?

```ts
optional aria-selected: boolean | "true" | "false";
```

Defined in: node\_modules/@types/react/index.d.ts:1723

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

```ts
HTMLAttributes.aria-selected
```

***

### aria-setsize?

```ts
optional aria-setsize: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1728

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

```ts
HTMLAttributes.aria-setsize
```

***

### aria-sort?

```ts
optional aria-sort: "none" | "ascending" | "descending" | "other";
```

Defined in: node\_modules/@types/react/index.d.ts:1730

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

```ts
HTMLAttributes.aria-sort
```

***

### aria-valuemax?

```ts
optional aria-valuemax: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1732

Defines the maximum allowed value for a range widget.

#### Inherited from

```ts
HTMLAttributes.aria-valuemax
```

***

### aria-valuemin?

```ts
optional aria-valuemin: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1734

Defines the minimum allowed value for a range widget.

#### Inherited from

```ts
HTMLAttributes.aria-valuemin
```

***

### aria-valuenow?

```ts
optional aria-valuenow: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1739

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

```ts
HTMLAttributes.aria-valuenow
```

***

### aria-valuetext?

```ts
optional aria-valuetext: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1741

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

```ts
HTMLAttributes.aria-valuetext
```

***

### autoCapitalize?

```ts
optional autoCapitalize: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1786

#### Inherited from

```ts
HTMLAttributes.autoCapitalize
```

***

### autoCorrect?

```ts
optional autoCorrect: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1787

#### Inherited from

```ts
HTMLAttributes.autoCorrect
```

***

### autoSave?

```ts
optional autoSave: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1788

#### Inherited from

```ts
HTMLAttributes.autoSave
```

***

### children

```ts
children: ReactNode;
```

Defined in: [src/components/Focusable.ts:8](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L8)

#### Overrides

```ts
HTMLAttributes.children
```

***

### className?

```ts
optional className: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1753

#### Inherited from

```ts
HTMLAttributes.className
```

***

### color?

```ts
optional color: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1789

#### Inherited from

```ts
HTMLAttributes.color
```

***

### contentEditable?

```ts
optional contentEditable: "inherit" | Booleanish;
```

Defined in: node\_modules/@types/react/index.d.ts:1754

#### Inherited from

```ts
HTMLAttributes.contentEditable
```

***

### contextMenu?

```ts
optional contextMenu: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1755

#### Inherited from

```ts
HTMLAttributes.contextMenu
```

***

### dangerouslySetInnerHTML?

```ts
optional dangerouslySetInnerHTML: {
  __html: string;
};
```

Defined in: node\_modules/@types/react/index.d.ts:1350

#### \_\_html

```ts
__html: string;
```

#### Inherited from

```ts
HTMLAttributes.dangerouslySetInnerHTML
```

***

### datatype?

```ts
optional datatype: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1777

#### Inherited from

```ts
HTMLAttributes.datatype
```

***

### defaultChecked?

```ts
optional defaultChecked: boolean;
```

Defined in: node\_modules/@types/react/index.d.ts:1746

#### Inherited from

```ts
HTMLAttributes.defaultChecked
```

***

### defaultValue?

```ts
optional defaultValue: string | number | readonly string[];
```

Defined in: node\_modules/@types/react/index.d.ts:1747

#### Inherited from

```ts
HTMLAttributes.defaultValue
```

***

### dir?

```ts
optional dir: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1756

#### Inherited from

```ts
HTMLAttributes.dir
```

***

### draggable?

```ts
optional draggable: Booleanish;
```

Defined in: node\_modules/@types/react/index.d.ts:1757

#### Inherited from

```ts
HTMLAttributes.draggable
```

***

### flow-children?

```ts
optional flow-children: string;
```

Defined in: [src/components/Focusable.ts:9](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L9)

***

### focusClassName?

```ts
optional focusClassName: string;
```

Defined in: [src/components/Focusable.ts:10](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L10)

***

### focusWithinClassName?

```ts
optional focusWithinClassName: string;
```

Defined in: [src/components/Focusable.ts:11](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L11)

***

### hidden?

```ts
optional hidden: boolean;
```

Defined in: node\_modules/@types/react/index.d.ts:1758

#### Inherited from

```ts
HTMLAttributes.hidden
```

***

### id?

```ts
optional id: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1759

#### Inherited from

```ts
HTMLAttributes.id
```

***

### inlist?

```ts
optional inlist: any;
```

Defined in: node\_modules/@types/react/index.d.ts:1778

#### Inherited from

```ts
HTMLAttributes.inlist
```

***

### inputMode?

```ts
optional inputMode: 
  | "none"
  | "text"
  | "search"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal";
```

Defined in: node\_modules/@types/react/index.d.ts:1804

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute

#### Inherited from

```ts
HTMLAttributes.inputMode
```

***

### is?

```ts
optional is: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1809

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is

#### Inherited from

```ts
HTMLAttributes.is
```

***

### itemID?

```ts
optional itemID: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1793

#### Inherited from

```ts
HTMLAttributes.itemID
```

***

### itemProp?

```ts
optional itemProp: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1790

#### Inherited from

```ts
HTMLAttributes.itemProp
```

***

### itemRef?

```ts
optional itemRef: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1794

#### Inherited from

```ts
HTMLAttributes.itemRef
```

***

### itemScope?

```ts
optional itemScope: boolean;
```

Defined in: node\_modules/@types/react/index.d.ts:1791

#### Inherited from

```ts
HTMLAttributes.itemScope
```

***

### itemType?

```ts
optional itemType: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1792

#### Inherited from

```ts
HTMLAttributes.itemType
```

***

### lang?

```ts
optional lang: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1760

#### Inherited from

```ts
HTMLAttributes.lang
```

***

### noFocusRing?

```ts
optional noFocusRing: boolean;
```

Defined in: [src/components/Focusable.ts:12](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L12)

***

### onAbort?

```ts
optional onAbort: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1405

#### Inherited from

```ts
HTMLAttributes.onAbort
```

***

### onAbortCapture?

```ts
optional onAbortCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1406

#### Inherited from

```ts
HTMLAttributes.onAbortCapture
```

***

### onActivate()?

```ts
optional onActivate: (e: CustomEvent) => void;
```

Defined in: [src/components/Focusable.ts:13](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L13)

#### Parameters

##### e

`CustomEvent`

#### Returns

`void`

***

### onAnimationEnd?

```ts
optional onAnimationEnd: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1535

#### Inherited from

```ts
HTMLAttributes.onAnimationEnd
```

***

### onAnimationEndCapture?

```ts
optional onAnimationEndCapture: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1536

#### Inherited from

```ts
HTMLAttributes.onAnimationEndCapture
```

***

### onAnimationIteration?

```ts
optional onAnimationIteration: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1537

#### Inherited from

```ts
HTMLAttributes.onAnimationIteration
```

***

### onAnimationIterationCapture?

```ts
optional onAnimationIterationCapture: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1538

#### Inherited from

```ts
HTMLAttributes.onAnimationIterationCapture
```

***

### onAnimationStart?

```ts
optional onAnimationStart: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1533

#### Inherited from

```ts
HTMLAttributes.onAnimationStart
```

***

### onAnimationStartCapture?

```ts
optional onAnimationStartCapture: AnimationEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1534

#### Inherited from

```ts
HTMLAttributes.onAnimationStartCapture
```

***

### onAuxClick?

```ts
optional onAuxClick: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1451

#### Inherited from

```ts
HTMLAttributes.onAuxClick
```

***

### onAuxClickCapture?

```ts
optional onAuxClickCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1452

#### Inherited from

```ts
HTMLAttributes.onAuxClickCapture
```

***

### onBeforeInput?

```ts
optional onBeforeInput: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1379

#### Inherited from

```ts
HTMLAttributes.onBeforeInput
```

***

### onBeforeInputCapture?

```ts
optional onBeforeInputCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1380

#### Inherited from

```ts
HTMLAttributes.onBeforeInputCapture
```

***

### onBlur?

```ts
optional onBlur: FocusEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1373

#### Inherited from

```ts
HTMLAttributes.onBlur
```

***

### onBlurCapture?

```ts
optional onBlurCapture: FocusEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1374

#### Inherited from

```ts
HTMLAttributes.onBlurCapture
```

***

### onButtonDown()?

```ts
optional onButtonDown: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:59](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L59)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonDown`](FooterLegendProps.md#onbuttondown)

***

### onButtonUp()?

```ts
optional onButtonUp: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:60](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L60)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonUp`](FooterLegendProps.md#onbuttonup)

***

### onCancel()?

```ts
optional onCancel: (e: CustomEvent) => void;
```

Defined in: [src/components/Focusable.ts:14](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Focusable.ts#L14)

#### Parameters

##### e

`CustomEvent`

#### Returns

`void`

***

### onCancelActionDescription?

```ts
optional onCancelActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:55](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L55)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelActionDescription`](FooterLegendProps.md#oncancelactiondescription)

***

### onCancelButton()?

```ts
optional onCancelButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:62](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L62)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelButton`](FooterLegendProps.md#oncancelbutton)

***

### onCanPlay?

```ts
optional onCanPlay: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1407

#### Inherited from

```ts
HTMLAttributes.onCanPlay
```

***

### onCanPlayCapture?

```ts
optional onCanPlayCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1408

#### Inherited from

```ts
HTMLAttributes.onCanPlayCapture
```

***

### onCanPlayThrough?

```ts
optional onCanPlayThrough: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1409

#### Inherited from

```ts
HTMLAttributes.onCanPlayThrough
```

***

### onCanPlayThroughCapture?

```ts
optional onCanPlayThroughCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1410

#### Inherited from

```ts
HTMLAttributes.onCanPlayThroughCapture
```

***

### onChange?

```ts
optional onChange: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1377

#### Inherited from

```ts
HTMLAttributes.onChange
```

***

### onChangeCapture?

```ts
optional onChangeCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1378

#### Inherited from

```ts
HTMLAttributes.onChangeCapture
```

***

### onClick?

```ts
optional onClick: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1453

#### Inherited from

```ts
HTMLAttributes.onClick
```

***

### onClickCapture?

```ts
optional onClickCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1454

#### Inherited from

```ts
HTMLAttributes.onClickCapture
```

***

### onCompositionEnd?

```ts
optional onCompositionEnd: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1363

#### Inherited from

```ts
HTMLAttributes.onCompositionEnd
```

***

### onCompositionEndCapture?

```ts
optional onCompositionEndCapture: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1364

#### Inherited from

```ts
HTMLAttributes.onCompositionEndCapture
```

***

### onCompositionStart?

```ts
optional onCompositionStart: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1365

#### Inherited from

```ts
HTMLAttributes.onCompositionStart
```

***

### onCompositionStartCapture?

```ts
optional onCompositionStartCapture: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1366

#### Inherited from

```ts
HTMLAttributes.onCompositionStartCapture
```

***

### onCompositionUpdate?

```ts
optional onCompositionUpdate: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1367

#### Inherited from

```ts
HTMLAttributes.onCompositionUpdate
```

***

### onCompositionUpdateCapture?

```ts
optional onCompositionUpdateCapture: CompositionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1368

#### Inherited from

```ts
HTMLAttributes.onCompositionUpdateCapture
```

***

### onContextMenu?

```ts
optional onContextMenu: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1455

#### Inherited from

```ts
HTMLAttributes.onContextMenu
```

***

### onContextMenuCapture?

```ts
optional onContextMenuCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1456

#### Inherited from

```ts
HTMLAttributes.onContextMenuCapture
```

***

### onCopy?

```ts
optional onCopy: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1355

#### Inherited from

```ts
HTMLAttributes.onCopy
```

***

### onCopyCapture?

```ts
optional onCopyCapture: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1356

#### Inherited from

```ts
HTMLAttributes.onCopyCapture
```

***

### onCut?

```ts
optional onCut: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1357

#### Inherited from

```ts
HTMLAttributes.onCut
```

***

### onCutCapture?

```ts
optional onCutCapture: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1358

#### Inherited from

```ts
HTMLAttributes.onCutCapture
```

***

### onDoubleClick?

```ts
optional onDoubleClick: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1457

#### Inherited from

```ts
HTMLAttributes.onDoubleClick
```

***

### onDoubleClickCapture?

```ts
optional onDoubleClickCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1458

#### Inherited from

```ts
HTMLAttributes.onDoubleClickCapture
```

***

### onDrag?

```ts
optional onDrag: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1459

#### Inherited from

```ts
HTMLAttributes.onDrag
```

***

### onDragCapture?

```ts
optional onDragCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1460

#### Inherited from

```ts
HTMLAttributes.onDragCapture
```

***

### onDragEnd?

```ts
optional onDragEnd: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1461

#### Inherited from

```ts
HTMLAttributes.onDragEnd
```

***

### onDragEndCapture?

```ts
optional onDragEndCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1462

#### Inherited from

```ts
HTMLAttributes.onDragEndCapture
```

***

### onDragEnter?

```ts
optional onDragEnter: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1463

#### Inherited from

```ts
HTMLAttributes.onDragEnter
```

***

### onDragEnterCapture?

```ts
optional onDragEnterCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1464

#### Inherited from

```ts
HTMLAttributes.onDragEnterCapture
```

***

### onDragExit?

```ts
optional onDragExit: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1465

#### Inherited from

```ts
HTMLAttributes.onDragExit
```

***

### onDragExitCapture?

```ts
optional onDragExitCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1466

#### Inherited from

```ts
HTMLAttributes.onDragExitCapture
```

***

### onDragLeave?

```ts
optional onDragLeave: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1467

#### Inherited from

```ts
HTMLAttributes.onDragLeave
```

***

### onDragLeaveCapture?

```ts
optional onDragLeaveCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1468

#### Inherited from

```ts
HTMLAttributes.onDragLeaveCapture
```

***

### onDragOver?

```ts
optional onDragOver: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1469

#### Inherited from

```ts
HTMLAttributes.onDragOver
```

***

### onDragOverCapture?

```ts
optional onDragOverCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1470

#### Inherited from

```ts
HTMLAttributes.onDragOverCapture
```

***

### onDragStart?

```ts
optional onDragStart: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1471

#### Inherited from

```ts
HTMLAttributes.onDragStart
```

***

### onDragStartCapture?

```ts
optional onDragStartCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1472

#### Inherited from

```ts
HTMLAttributes.onDragStartCapture
```

***

### onDrop?

```ts
optional onDrop: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1473

#### Inherited from

```ts
HTMLAttributes.onDrop
```

***

### onDropCapture?

```ts
optional onDropCapture: DragEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1474

#### Inherited from

```ts
HTMLAttributes.onDropCapture
```

***

### onDurationChange?

```ts
optional onDurationChange: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1411

#### Inherited from

```ts
HTMLAttributes.onDurationChange
```

***

### onDurationChangeCapture?

```ts
optional onDurationChangeCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1412

#### Inherited from

```ts
HTMLAttributes.onDurationChangeCapture
```

***

### onEmptied?

```ts
optional onEmptied: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1413

#### Inherited from

```ts
HTMLAttributes.onEmptied
```

***

### onEmptiedCapture?

```ts
optional onEmptiedCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1414

#### Inherited from

```ts
HTMLAttributes.onEmptiedCapture
```

***

### onEncrypted?

```ts
optional onEncrypted: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1415

#### Inherited from

```ts
HTMLAttributes.onEncrypted
```

***

### onEncryptedCapture?

```ts
optional onEncryptedCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1416

#### Inherited from

```ts
HTMLAttributes.onEncryptedCapture
```

***

### onEnded?

```ts
optional onEnded: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1417

#### Inherited from

```ts
HTMLAttributes.onEnded
```

***

### onEndedCapture?

```ts
optional onEndedCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1418

#### Inherited from

```ts
HTMLAttributes.onEndedCapture
```

***

### onError?

```ts
optional onError: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1393

#### Inherited from

```ts
HTMLAttributes.onError
```

***

### onErrorCapture?

```ts
optional onErrorCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1394

#### Inherited from

```ts
HTMLAttributes.onErrorCapture
```

***

### onFocus?

```ts
optional onFocus: FocusEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1371

#### Inherited from

```ts
HTMLAttributes.onFocus
```

***

### onFocusCapture?

```ts
optional onFocusCapture: FocusEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1372

#### Inherited from

```ts
HTMLAttributes.onFocusCapture
```

***

### onGamepadBlur()?

```ts
optional onGamepadBlur: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:67](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L67)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadBlur`](FooterLegendProps.md#ongamepadblur)

***

### onGamepadDirection()?

```ts
optional onGamepadDirection: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:65](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L65)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadDirection`](FooterLegendProps.md#ongamepaddirection)

***

### onGamepadFocus()?

```ts
optional onGamepadFocus: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:66](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L66)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadFocus`](FooterLegendProps.md#ongamepadfocus)

***

### onGotPointerCapture?

```ts
optional onGotPointerCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1519

#### Inherited from

```ts
HTMLAttributes.onGotPointerCapture
```

***

### onGotPointerCaptureCapture?

```ts
optional onGotPointerCaptureCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1520

#### Inherited from

```ts
HTMLAttributes.onGotPointerCaptureCapture
```

***

### onInput?

```ts
optional onInput: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1381

#### Inherited from

```ts
HTMLAttributes.onInput
```

***

### onInputCapture?

```ts
optional onInputCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1382

#### Inherited from

```ts
HTMLAttributes.onInputCapture
```

***

### onInvalid?

```ts
optional onInvalid: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1387

#### Inherited from

```ts
HTMLAttributes.onInvalid
```

***

### onInvalidCapture?

```ts
optional onInvalidCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1388

#### Inherited from

```ts
HTMLAttributes.onInvalidCapture
```

***

### onKeyDown?

```ts
optional onKeyDown: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1397

#### Inherited from

```ts
HTMLAttributes.onKeyDown
```

***

### onKeyDownCapture?

```ts
optional onKeyDownCapture: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1398

#### Inherited from

```ts
HTMLAttributes.onKeyDownCapture
```

***

### onKeyPress?

```ts
optional onKeyPress: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1399

#### Inherited from

```ts
HTMLAttributes.onKeyPress
```

***

### onKeyPressCapture?

```ts
optional onKeyPressCapture: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1400

#### Inherited from

```ts
HTMLAttributes.onKeyPressCapture
```

***

### onKeyUp?

```ts
optional onKeyUp: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1401

#### Inherited from

```ts
HTMLAttributes.onKeyUp
```

***

### onKeyUpCapture?

```ts
optional onKeyUpCapture: KeyboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1402

#### Inherited from

```ts
HTMLAttributes.onKeyUpCapture
```

***

### onLoad?

```ts
optional onLoad: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1391

#### Inherited from

```ts
HTMLAttributes.onLoad
```

***

### onLoadCapture?

```ts
optional onLoadCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1392

#### Inherited from

```ts
HTMLAttributes.onLoadCapture
```

***

### onLoadedData?

```ts
optional onLoadedData: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1419

#### Inherited from

```ts
HTMLAttributes.onLoadedData
```

***

### onLoadedDataCapture?

```ts
optional onLoadedDataCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1420

#### Inherited from

```ts
HTMLAttributes.onLoadedDataCapture
```

***

### onLoadedMetadata?

```ts
optional onLoadedMetadata: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1421

#### Inherited from

```ts
HTMLAttributes.onLoadedMetadata
```

***

### onLoadedMetadataCapture?

```ts
optional onLoadedMetadataCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1422

#### Inherited from

```ts
HTMLAttributes.onLoadedMetadataCapture
```

***

### onLoadStart?

```ts
optional onLoadStart: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1423

#### Inherited from

```ts
HTMLAttributes.onLoadStart
```

***

### onLoadStartCapture?

```ts
optional onLoadStartCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1424

#### Inherited from

```ts
HTMLAttributes.onLoadStartCapture
```

***

### onLostPointerCapture?

```ts
optional onLostPointerCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1521

#### Inherited from

```ts
HTMLAttributes.onLostPointerCapture
```

***

### onLostPointerCaptureCapture?

```ts
optional onLostPointerCaptureCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1522

#### Inherited from

```ts
HTMLAttributes.onLostPointerCaptureCapture
```

***

### onMenuActionDescription?

```ts
optional onMenuActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:58](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L58)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuActionDescription`](FooterLegendProps.md#onmenuactiondescription)

***

### onMenuButton()?

```ts
optional onMenuButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:68](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L68)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuButton`](FooterLegendProps.md#onmenubutton)

***

### onMouseDown?

```ts
optional onMouseDown: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1475

#### Inherited from

```ts
HTMLAttributes.onMouseDown
```

***

### onMouseDownCapture?

```ts
optional onMouseDownCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1476

#### Inherited from

```ts
HTMLAttributes.onMouseDownCapture
```

***

### onMouseEnter?

```ts
optional onMouseEnter: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1477

#### Inherited from

```ts
HTMLAttributes.onMouseEnter
```

***

### onMouseLeave?

```ts
optional onMouseLeave: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1478

#### Inherited from

```ts
HTMLAttributes.onMouseLeave
```

***

### onMouseMove?

```ts
optional onMouseMove: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1479

#### Inherited from

```ts
HTMLAttributes.onMouseMove
```

***

### onMouseMoveCapture?

```ts
optional onMouseMoveCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1480

#### Inherited from

```ts
HTMLAttributes.onMouseMoveCapture
```

***

### onMouseOut?

```ts
optional onMouseOut: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1481

#### Inherited from

```ts
HTMLAttributes.onMouseOut
```

***

### onMouseOutCapture?

```ts
optional onMouseOutCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1482

#### Inherited from

```ts
HTMLAttributes.onMouseOutCapture
```

***

### onMouseOver?

```ts
optional onMouseOver: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1483

#### Inherited from

```ts
HTMLAttributes.onMouseOver
```

***

### onMouseOverCapture?

```ts
optional onMouseOverCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1484

#### Inherited from

```ts
HTMLAttributes.onMouseOverCapture
```

***

### onMouseUp?

```ts
optional onMouseUp: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1485

#### Inherited from

```ts
HTMLAttributes.onMouseUp
```

***

### onMouseUpCapture?

```ts
optional onMouseUpCapture: MouseEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1486

#### Inherited from

```ts
HTMLAttributes.onMouseUpCapture
```

***

### onOKActionDescription?

```ts
optional onOKActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:54](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L54)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKActionDescription`](FooterLegendProps.md#onokactiondescription)

***

### onOKButton()?

```ts
optional onOKButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:61](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L61)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKButton`](FooterLegendProps.md#onokbutton)

***

### onOptionsActionDescription?

```ts
optional onOptionsActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:57](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L57)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsActionDescription`](FooterLegendProps.md#onoptionsactiondescription)

***

### onOptionsButton()?

```ts
optional onOptionsButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:64](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L64)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsButton`](FooterLegendProps.md#onoptionsbutton)

***

### onPaste?

```ts
optional onPaste: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1359

#### Inherited from

```ts
HTMLAttributes.onPaste
```

***

### onPasteCapture?

```ts
optional onPasteCapture: ClipboardEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1360

#### Inherited from

```ts
HTMLAttributes.onPasteCapture
```

***

### onPause?

```ts
optional onPause: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1425

#### Inherited from

```ts
HTMLAttributes.onPause
```

***

### onPauseCapture?

```ts
optional onPauseCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1426

#### Inherited from

```ts
HTMLAttributes.onPauseCapture
```

***

### onPlay?

```ts
optional onPlay: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1427

#### Inherited from

```ts
HTMLAttributes.onPlay
```

***

### onPlayCapture?

```ts
optional onPlayCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1428

#### Inherited from

```ts
HTMLAttributes.onPlayCapture
```

***

### onPlaying?

```ts
optional onPlaying: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1429

#### Inherited from

```ts
HTMLAttributes.onPlaying
```

***

### onPlayingCapture?

```ts
optional onPlayingCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1430

#### Inherited from

```ts
HTMLAttributes.onPlayingCapture
```

***

### onPointerCancel?

```ts
optional onPointerCancel: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1509

#### Inherited from

```ts
HTMLAttributes.onPointerCancel
```

***

### onPointerCancelCapture?

```ts
optional onPointerCancelCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1510

#### Inherited from

```ts
HTMLAttributes.onPointerCancelCapture
```

***

### onPointerDown?

```ts
optional onPointerDown: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1503

#### Inherited from

```ts
HTMLAttributes.onPointerDown
```

***

### onPointerDownCapture?

```ts
optional onPointerDownCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1504

#### Inherited from

```ts
HTMLAttributes.onPointerDownCapture
```

***

### onPointerEnter?

```ts
optional onPointerEnter: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1511

#### Inherited from

```ts
HTMLAttributes.onPointerEnter
```

***

### onPointerEnterCapture?

```ts
optional onPointerEnterCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1512

#### Inherited from

```ts
HTMLAttributes.onPointerEnterCapture
```

***

### onPointerLeave?

```ts
optional onPointerLeave: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1513

#### Inherited from

```ts
HTMLAttributes.onPointerLeave
```

***

### onPointerLeaveCapture?

```ts
optional onPointerLeaveCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1514

#### Inherited from

```ts
HTMLAttributes.onPointerLeaveCapture
```

***

### onPointerMove?

```ts
optional onPointerMove: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1505

#### Inherited from

```ts
HTMLAttributes.onPointerMove
```

***

### onPointerMoveCapture?

```ts
optional onPointerMoveCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1506

#### Inherited from

```ts
HTMLAttributes.onPointerMoveCapture
```

***

### onPointerOut?

```ts
optional onPointerOut: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1517

#### Inherited from

```ts
HTMLAttributes.onPointerOut
```

***

### onPointerOutCapture?

```ts
optional onPointerOutCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1518

#### Inherited from

```ts
HTMLAttributes.onPointerOutCapture
```

***

### onPointerOver?

```ts
optional onPointerOver: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1515

#### Inherited from

```ts
HTMLAttributes.onPointerOver
```

***

### onPointerOverCapture?

```ts
optional onPointerOverCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1516

#### Inherited from

```ts
HTMLAttributes.onPointerOverCapture
```

***

### onPointerUp?

```ts
optional onPointerUp: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1507

#### Inherited from

```ts
HTMLAttributes.onPointerUp
```

***

### onPointerUpCapture?

```ts
optional onPointerUpCapture: PointerEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1508

#### Inherited from

```ts
HTMLAttributes.onPointerUpCapture
```

***

### onProgress?

```ts
optional onProgress: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1431

#### Inherited from

```ts
HTMLAttributes.onProgress
```

***

### onProgressCapture?

```ts
optional onProgressCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1432

#### Inherited from

```ts
HTMLAttributes.onProgressCapture
```

***

### onRateChange?

```ts
optional onRateChange: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1433

#### Inherited from

```ts
HTMLAttributes.onRateChange
```

***

### onRateChangeCapture?

```ts
optional onRateChangeCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1434

#### Inherited from

```ts
HTMLAttributes.onRateChangeCapture
```

***

### onReset?

```ts
optional onReset: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1383

#### Inherited from

```ts
HTMLAttributes.onReset
```

***

### onResetCapture?

```ts
optional onResetCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1384

#### Inherited from

```ts
HTMLAttributes.onResetCapture
```

***

### onScroll?

```ts
optional onScroll: UIEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1525

#### Inherited from

```ts
HTMLAttributes.onScroll
```

***

### onScrollCapture?

```ts
optional onScrollCapture: UIEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1526

#### Inherited from

```ts
HTMLAttributes.onScrollCapture
```

***

### onSecondaryActionDescription?

```ts
optional onSecondaryActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:56](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L56)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryActionDescription`](FooterLegendProps.md#onsecondaryactiondescription)

***

### onSecondaryButton()?

```ts
optional onSecondaryButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:63](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L63)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryButton`](FooterLegendProps.md#onsecondarybutton)

***

### onSeeked?

```ts
optional onSeeked: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1435

#### Inherited from

```ts
HTMLAttributes.onSeeked
```

***

### onSeekedCapture?

```ts
optional onSeekedCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1436

#### Inherited from

```ts
HTMLAttributes.onSeekedCapture
```

***

### onSeeking?

```ts
optional onSeeking: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1437

#### Inherited from

```ts
HTMLAttributes.onSeeking
```

***

### onSeekingCapture?

```ts
optional onSeekingCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1438

#### Inherited from

```ts
HTMLAttributes.onSeekingCapture
```

***

### onSelect?

```ts
optional onSelect: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1489

#### Inherited from

```ts
HTMLAttributes.onSelect
```

***

### onSelectCapture?

```ts
optional onSelectCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1490

#### Inherited from

```ts
HTMLAttributes.onSelectCapture
```

***

### onStalled?

```ts
optional onStalled: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1439

#### Inherited from

```ts
HTMLAttributes.onStalled
```

***

### onStalledCapture?

```ts
optional onStalledCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1440

#### Inherited from

```ts
HTMLAttributes.onStalledCapture
```

***

### onSubmit?

```ts
optional onSubmit: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1385

#### Inherited from

```ts
HTMLAttributes.onSubmit
```

***

### onSubmitCapture?

```ts
optional onSubmitCapture: FormEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1386

#### Inherited from

```ts
HTMLAttributes.onSubmitCapture
```

***

### onSuspend?

```ts
optional onSuspend: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1441

#### Inherited from

```ts
HTMLAttributes.onSuspend
```

***

### onSuspendCapture?

```ts
optional onSuspendCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1442

#### Inherited from

```ts
HTMLAttributes.onSuspendCapture
```

***

### onTimeUpdate?

```ts
optional onTimeUpdate: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1443

#### Inherited from

```ts
HTMLAttributes.onTimeUpdate
```

***

### onTimeUpdateCapture?

```ts
optional onTimeUpdateCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1444

#### Inherited from

```ts
HTMLAttributes.onTimeUpdateCapture
```

***

### onTouchCancel?

```ts
optional onTouchCancel: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1493

#### Inherited from

```ts
HTMLAttributes.onTouchCancel
```

***

### onTouchCancelCapture?

```ts
optional onTouchCancelCapture: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1494

#### Inherited from

```ts
HTMLAttributes.onTouchCancelCapture
```

***

### onTouchEnd?

```ts
optional onTouchEnd: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1495

#### Inherited from

```ts
HTMLAttributes.onTouchEnd
```

***

### onTouchEndCapture?

```ts
optional onTouchEndCapture: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1496

#### Inherited from

```ts
HTMLAttributes.onTouchEndCapture
```

***

### onTouchMove?

```ts
optional onTouchMove: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1497

#### Inherited from

```ts
HTMLAttributes.onTouchMove
```

***

### onTouchMoveCapture?

```ts
optional onTouchMoveCapture: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1498

#### Inherited from

```ts
HTMLAttributes.onTouchMoveCapture
```

***

### onTouchStart?

```ts
optional onTouchStart: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1499

#### Inherited from

```ts
HTMLAttributes.onTouchStart
```

***

### onTouchStartCapture?

```ts
optional onTouchStartCapture: TouchEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1500

#### Inherited from

```ts
HTMLAttributes.onTouchStartCapture
```

***

### onTransitionEnd?

```ts
optional onTransitionEnd: TransitionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1541

#### Inherited from

```ts
HTMLAttributes.onTransitionEnd
```

***

### onTransitionEndCapture?

```ts
optional onTransitionEndCapture: TransitionEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1542

#### Inherited from

```ts
HTMLAttributes.onTransitionEndCapture
```

***

### onVolumeChange?

```ts
optional onVolumeChange: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1445

#### Inherited from

```ts
HTMLAttributes.onVolumeChange
```

***

### onVolumeChangeCapture?

```ts
optional onVolumeChangeCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1446

#### Inherited from

```ts
HTMLAttributes.onVolumeChangeCapture
```

***

### onWaiting?

```ts
optional onWaiting: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1447

#### Inherited from

```ts
HTMLAttributes.onWaiting
```

***

### onWaitingCapture?

```ts
optional onWaitingCapture: ReactEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1448

#### Inherited from

```ts
HTMLAttributes.onWaitingCapture
```

***

### onWheel?

```ts
optional onWheel: WheelEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1529

#### Inherited from

```ts
HTMLAttributes.onWheel
```

***

### onWheelCapture?

```ts
optional onWheelCapture: WheelEventHandler<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:1530

#### Inherited from

```ts
HTMLAttributes.onWheelCapture
```

***

### placeholder?

```ts
optional placeholder: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1761

#### Inherited from

```ts
HTMLAttributes.placeholder
```

***

### prefix?

```ts
optional prefix: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1779

#### Inherited from

```ts
HTMLAttributes.prefix
```

***

### property?

```ts
optional property: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1780

#### Inherited from

```ts
HTMLAttributes.property
```

***

### radioGroup?

```ts
optional radioGroup: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1770

#### Inherited from

```ts
HTMLAttributes.radioGroup
```

***

### resource?

```ts
optional resource: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1781

#### Inherited from

```ts
HTMLAttributes.resource
```

***

### results?

```ts
optional results: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1795

#### Inherited from

```ts
HTMLAttributes.results
```

***

### role?

```ts
optional role: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1773

#### Inherited from

```ts
HTMLAttributes.role
```

***

### security?

```ts
optional security: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1796

#### Inherited from

```ts
HTMLAttributes.security
```

***

### slot?

```ts
optional slot: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1762

#### Inherited from

```ts
HTMLAttributes.slot
```

***

### spellCheck?

```ts
optional spellCheck: Booleanish;
```

Defined in: node\_modules/@types/react/index.d.ts:1763

#### Inherited from

```ts
HTMLAttributes.spellCheck
```

***

### style?

```ts
optional style: CSSProperties;
```

Defined in: node\_modules/@types/react/index.d.ts:1764

#### Inherited from

```ts
HTMLAttributes.style
```

***

### suppressContentEditableWarning?

```ts
optional suppressContentEditableWarning: boolean;
```

Defined in: node\_modules/@types/react/index.d.ts:1748

#### Inherited from

```ts
HTMLAttributes.suppressContentEditableWarning
```

***

### suppressHydrationWarning?

```ts
optional suppressHydrationWarning: boolean;
```

Defined in: node\_modules/@types/react/index.d.ts:1749

#### Inherited from

```ts
HTMLAttributes.suppressHydrationWarning
```

***

### tabIndex?

```ts
optional tabIndex: number;
```

Defined in: node\_modules/@types/react/index.d.ts:1765

#### Inherited from

```ts
HTMLAttributes.tabIndex
```

***

### title?

```ts
optional title: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1766

#### Inherited from

```ts
HTMLAttributes.title
```

***

### translate?

```ts
optional translate: "yes" | "no";
```

Defined in: node\_modules/@types/react/index.d.ts:1767

#### Inherited from

```ts
HTMLAttributes.translate
```

***

### typeof?

```ts
optional typeof: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1782

#### Inherited from

```ts
HTMLAttributes.typeof
```

***

### unselectable?

```ts
optional unselectable: "on" | "off";
```

Defined in: node\_modules/@types/react/index.d.ts:1797

#### Inherited from

```ts
HTMLAttributes.unselectable
```

***

### vocab?

```ts
optional vocab: string;
```

Defined in: node\_modules/@types/react/index.d.ts:1783

#### Inherited from

```ts
HTMLAttributes.vocab
```
