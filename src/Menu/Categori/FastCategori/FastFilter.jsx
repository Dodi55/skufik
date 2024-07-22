import { useEffect, useState, useRef, useMemo } from "react"
import React from "react";



export function FastFilter({name}) {
 
    if (name == 'iPhone') {
        return(
            <nav className="categori-fast-filter">
                    <p>Категории:</p>
                    <a href="">iPhone 15 Pro Max</a>
                    <a href="">iPhone 15 Pro</a>
                    <a href="">iPhone 15 Plus</a>
                    <a href="">iPhone 15</a>
                    <a href="">iPhone 14 Pro Max</a>
                    <a href="">iPhone 14 Pro</a>
                    <a href="">iPhone 14 Plus</a>
                    <a href="">iPhone 14</a>
                    <a href="">iPhone 13</a>
                    <a href="">iPhone 13 mini</a>
                    <a href="">iPhone 12</a>
                    <a href="">iPhone 12 SE</a>
                    <a href="">iPhone 11</a>
            </nav>
        )  
    }
    if (name == 'Mac') {
        return(
            <nav className="categori-fast-filter">
              <p>Категории:</p>
              <a href="">MacBook Pro</a>
              <a href="">MacBook Air</a>
              <a href="">iMac</a>
              <a href="">Mac mini</a>
            </nav>
        ) 
    }
    if (name == 'Watch') {
        return(
            <nav className="categori-fast-filter">
              <p>Категории:</p>
              <a href="">Watch Series 9</a>
              <a href="">Watch Ultra 2</a>
              <a href="">Watch SE 2</a>
              <a href="">Watch Series 8</a>
            </nav>
        ) 
    }
    if (name == 'AirPods') {
        return(
            <nav className="categori-fast-filter">
              <p>Категории:</p>
              <a href="">AirPods Max</a>
              <a href="">AirPods 2</a>
              <a href="">AirPods 2 Pro</a>
              <a href="">AirPods 3</a>
            </nav>
        ) 
    }
    if (name == 'Все для игр') {
        return(
            <nav className="categori-fast-filter">
              <p>Категории:</p>
              <a href="">Геймпад</a>
              <a href="">Консоль</a>
              <a href="">Аксессуары</a>
              <a href="">Виртуальная реальность</a>
            </nav>
        ) 
    }
}