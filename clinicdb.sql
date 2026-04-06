-- Tạo DB nếu chưa tồn tại
IF NOT EXISTS (
    SELECT name FROM sys.databases WHERE name = 'ClinicDB'
)
BEGIN
    CREATE DATABASE ClinicDB;
END
GO

USE ClinicDB
GO

-- XÓA bảng nếu đã tồn tại (tránh lỗi khi chạy lại)
IF OBJECT_ID('Appointments', 'U') IS NOT NULL DROP TABLE Appointments;
IF OBJECT_ID('Doctors', 'U') IS NOT NULL DROP TABLE Doctors;
IF OBJECT_ID('Users', 'U') IS NOT NULL DROP TABLE Users;
GO

-- Users
CREATE TABLE Users (
    Id INT IDENTITY PRIMARY KEY,
    Username NVARCHAR(50),
    Password NVARCHAR(100),
    Role NVARCHAR(20)
);

-- Doctors
CREATE TABLE Doctors (
    Id INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(100),
    Specialty NVARCHAR(100),
    Image NVARCHAR(255)
);

-- Appointments
CREATE TABLE Appointments (
    Id INT IDENTITY PRIMARY KEY,
    UserId INT,
    DoctorId INT,
    AppointmentDate DATETIME,
    Status NVARCHAR(50)
);

-- Data mẫu
INSERT INTO Doctors (Name, Specialty, Image)
VALUES 
(N'Nguyễn Văn A', N'Tim mạch', ''),
(N'Trần Thị B', N'Nhi khoa', '');

INSERT INTO Users (Username, Password, Role)
VALUES 
('admin', '123456', 'admin'),
('user1', '123456', 'user');

INSERT INTO Users (Username, Password, Role)
VALUES ('admin', '123', 'Admin')