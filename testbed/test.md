Here's a little something I prepared in order to answer my own query (that came
about when I reached this chapter's end). Might be a good addition to this 
chapter, or the one about jQuery.

Depending on the method we use to register a function event handler,
`return false`, has difererent effect on event propagation/bubbling and on the
invocation of event's default action:

| Handler Registering Method              | Effect of `return false`                           |
|-----------------------------------------|----------------------------------------------------|
| `addEventListener()`                    | No effect                                          |
| Target's property (e.g. `elem.onclick`) | Same as `preventDefault()`                         |
| jQuery                                  | Same as `preventDefault()` and `stopPropagation()` |
