import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: string[] = [
    '1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '6 -Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.',
    '7 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias voluptates eius, sunt commodi illo, id maxime ipsa, repudiandae qui beatae dicta nesciunt eos facilis corporis molestias aperiam voluptatibus. Magnam.'
  ];

  constructor() { }

  ngOnInit() {
  }

}
