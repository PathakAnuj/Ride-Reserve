import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.less'
})
export class Header implements OnInit {
  isDarkTheme: boolean = false;

  ngOnInit() {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
    } else {
      this.isDarkTheme = false;
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
    }
  }

  toggleTheme(event: any) {
    console.log('Theme toggle event:', event); 
    this.isDarkTheme = event.checked;

    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}