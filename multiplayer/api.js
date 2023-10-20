const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const waitingPlayers = [];
const openRooms = [];

io.on('connection', (socket) => {
  console.log('Ein Spieler hat sich verbunden.');

  // Ein Spieler sucht nach einem Spiel
  socket.on('sucheSpiel', () => {
    const waitingPlayer = waitingPlayers.shift();
    if (waitingPlayer) {
      // Es gibt einen wartenden Spieler, erstelle einen Raum
      const room = [socket, waitingPlayer];
      openRooms.push(room);
      waitingPlayer.emit('spielGefunden', room);
      socket.emit('spielGefunden', room);
    } else {
      // Kein wartender Spieler, warte auf einen anderen Spieler
      waitingPlayers.push(socket);
    }
  });

  // Spielstände zwischen Spielern im Raum übertragen
  socket.on('spielzug', (data) => {
    // Hier sollte die Logik für die Übertragung der Spielstände implementiert werden.
    // data enthält den Spielzug und die Spielrauminformationen.
  });

  socket.on('disconnect', () => {
    console.log('Ein Spieler hat die Verbindung getrennt.');
    const index = waitingPlayers.indexOf(socket);
    if (index !== -1) {
      // Entferne den Spieler aus der Liste der wartenden Spieler
      waitingPlayers.splice(index, 1);
    } else {
      // Entferne den Spieler aus offenen Räumen
      const roomIndex = openRooms.findIndex((room) => room.includes(socket));
      if (roomIndex !== -1) {
        openRooms.splice(roomIndex, 1);
      }
    }
  });
});

server.listen(3000, () => {
  console.log('Server läuft auf http://localhost:3000');
});