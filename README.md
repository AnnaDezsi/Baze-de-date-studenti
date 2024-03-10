# Baze-de-date-studenti
# # Baze de date Studenti

## Descriere
Proiectul "Baze de date Studenti" este o aplicație web care gestionează informații legate de studenți, notele lor, prezențele și materiile acestora folosind o bază de date MySQL. Aplicația include și un sistem de autentificare pentru fiecare student, oferindu-le acces la propriile lor date.

## Tehnologii folosite
- **Interfața utilizatorului (UI):** React
- **Server backend (API):** Spring Boot
- **Bază de date:** MySQL

## Funcționalități
- **Înregistrare și autentificare:** Studenții pot crea conturi și se pot autentifica pentru a accesa datele lor.
- **Gestionează informațiile studenților:** Permite adăugarea, modificarea și ștergerea datelor referitoare la studenți, cum ar fi numele, datele personale, notele și prezențele.
- **Gestionează informațiile despre materii:** Permite adăugarea și actualizarea datelor despre materii precum numele materiei, profesorul asociat și alte detalii relevante.
- **Vizualizare și gestionare note și prezențe:** Studenții și profesorii pot vizualiza și gestiona notele și prezențele asociate fiecărui student.
- **Securitate:** Asigură securitatea datelor prin intermediul autentificării și autorizării pentru a proteja datele sensibile ale studenților.

## Cum să rulezi proiectul local
1. Clonează acest repository pe calculatorul tău local.
2. Asigură-te că ai instalate următoarele:
   - Node.js și npm pentru React.
   - Java și Maven pentru Spring Boot.
   - MySQL Server pentru baza de date.
3. Configurare baza de date:
   - Creează o bază de date MySQL și rulează scriptul de creare al tabelelor și datele inițiale.
   - Configurează aplicația Spring Boot pentru a se conecta la baza de date prin fișierul `application.properties`.
4. Pornirea serverului Spring Boot:
   - Navighează către directorul backend al proiectului.
   - Rulează comanda `mvn spring-boot:run`.
5. Pornirea interfeței utilizatorului React:
   - Navighează către directorul frontend al proiectului.
   - Rulează comanda `npm install` pentru a instala dependențele.
   - După instalare, rulează comanda `npm start` pentru a porni serverul de dezvoltare React.

Acum, poți accesa aplicația într-un browser la adresa `http://localhost:3000`.

## Contribuții
Contribuțiile sunt binevenite! Dacă dorești să contribui la dezvoltarea acestui proiect, te rugăm să urmezi următorii pași:
1. Fork-uieste acest repository.
2. Creează un branch nou pentru funcționalitatea pe care dorești să o adaugi (`git checkout -b feature/noua-functie`).
3. Adaugă și comite schimbările tale (`git commit -am 'Adaugă o nouă funcționalitate'`).
4. Push-uieste branch-ul către repository-ul tău fork (`git push origin feature/noua-functie`).
5. Trimite un Pull Request către branch-ul principal al acestui repository.

## Autor
Acest proiect a fost creat de [Anna Dezsi](https://github.com/AnnaDezsi), [Chis Larisa](https://github.com/numele-tau).

