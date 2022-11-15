# Javascript chat with API

1. Stwórz projekt chatu oparty na LS
 Wymagania:
 - Stwórz stronę główną, zawierającą listę wiadomości. Każda wiadomośc ma zawierać pole message i author.
 - Stwórz podstronę, add zawierającą formularz pozwalający na dodanie wiadomości
 - Zrób nawigację na obu stronach, żebyśmy mogli przechodzić pomiędzy stronami index i add
 - Zrób wyświetlanie listy i dodawanie za pomocą localStorage


2. Stwórz własny serwer (możesz w zasadzie przekopiować wszystko co było poprzednio)
   Wymagania
   - Zrób obsługę endpointu GET /messages (stwórz json z baza danych)
   - Zrób obsługę endpoint POST /messages (aby dodawał do json z bazą danych)

---------------------------------------------------------------------------------
3*. Przy kazdej wiadomosci, dodaj ikonke olowka, ktora przekieruje uzytkownika na podstrone edit.html. Wiadomosc, ktora jest edytowana zapisz do LS, a nastepnie odczytaj na podstronie edit.html. Nastepnie zrob obsluge endpointa PUT /messages/ID, ktory bedzie edytowal konkretna wiadomosc.