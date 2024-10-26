import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // Used Mockoon for mocking APIs
  private apiUrl = 'http://localhost:3000';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  // CRUD Operations
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }

  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + '/reservation/' + id);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(
      this.apiUrl + '/reservation/',
      reservation
    );
  }

  deleteReservation(id: string): Observable<string> {
    return this.http.delete<string>(this.apiUrl + '/reservation/' + id);
  }

  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<Reservation> {
    return this.http.put<Reservation>(
      this.apiUrl + '/reservation/' + id,
      updatedReservation
    );
  }
}
