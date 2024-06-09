use odontologia_sd;
CREATE TABLE paciente(
	id INT auto_increment PRIMARY KEY,
    dni VARCHAR(11) unique NOT NULL,
    email VARCHAR(100),
    contrasenia VARCHAR(60) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    nacionalidad VARCHAR(50) NOT NULL,
    telefono VARCHAR(20),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Sirve para que automaticamente registre la fecha y hora del momento en el que se registra
    );
    
use odontologia_sd;
CREATE TABLE administrador(
	id INT auto_increment PRIMARY KEY,
    dni VARCHAR(11) unique NOT NULL,
    email VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(60) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL
    );

use odontologia_sd;
CREATE TABLE profesional(
	id INT auto_increment PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    especialidad VARCHAR(50) NOT NULL,
    telefono VARCHAR(20)
    );
    

CREATE TABLE especialidad(
	id INT auto_increment PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
	duracion INT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    id_profesional INT NOT NULL,
    FOREIGN KEY (id_profesional) REFERENCES profesional(id)
    );
    
use odontologia_sd;
CREATE TABLE turno(
	id INT auto_increment PRIMARY KEY,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    estado ENUM('confirmado', 'cancelado') DEFAULT,
    id_especialidad INT NOT NULL,
    FOREIGN KEY id_especialidad REFERENCES especialidad(id)
    );

CREATE TABLE turno_paciente(
	id INT auto_increment PRIMARY KEY,
    id_turno INT NOT NULL,
    id_paciente INT NOT NULL,
    FOREIGN KEY id_turno REFERENCES turno(id),
    FOREIGN KEY id_paciente REFERENCES paciente(id)
);

CREATE TABLE direccion(
	id INT auto_increment PRIMARY KEY,
	barrio VARCHAR(60),
    numero INT,
    calle VARCHAR(60),
    provincia VARCHAR(60) NOT NULL,
    localidad VARCHAR(60),
    codigo_postal VARCHAR(20),
    descripcion TEXT,
    id_paciente INT,
    id_administrador INT,
    id_profesional INT,
    FOREIGN KEY id_paciente REFERENCES paciente(id),
    FOREIGN KEY id_administrador REFERENCES administrador(id),
    FOREIGN KEY id_profesional REFERENCES profesional(id)
    );
    



    

    
    