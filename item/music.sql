set names utf8;
drop database if exists mymusic;
create database mymusic charset=utf8;
use mymusic;
create table mlist(
mid int primary key,
mname varchar(12),
msrc varchar(30) unique
);
insert into mlist values(1,'鬼灭之刃','./musci/中川奈美 - 竈門炭治郎のうた.mp3');
insert into mlist values(2,'打上花火','./musci/DAOKO 米津玄師 - 打上花火.mp3');
