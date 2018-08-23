import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


export class OpenChallenge {
    Category: string;
    Currency: string;
    Reward: number;
    Buyin: number;
    Description: string;
    Author: string;
    AuthorId: string;
    CreatedAt: string;
}