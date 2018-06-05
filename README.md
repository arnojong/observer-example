## Observer

The Observer Pattern is a one to many relationship between a subject and its observers.
When the subject changes, all observers are notified.
Observers can subscribe and unsubscribe to a subject.

Een event listener is een type observer

De observer is dan:
```
Class Enemy{
  Window.addeventlistener(“keydown”)
}
```
En de subject is:
```
Class Window{
  dispatchEvent(“Keydown”)
}
```

Voorbeeld: Een email-notificatie wordt naar je gestuurd wanneer een bepaalde broek weer op voorraad is.
Het subject is dan de broek, die stuurt een email naar de observers (waaronder jij, omdat je gesubscribed bent op die broek).
