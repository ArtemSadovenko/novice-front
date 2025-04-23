import { UserData } from "./auth"
import { RoomDetails } from "./roomdetails"
import { Team } from "./team"

export interface Tournament {
    id: string
    name: string
    topics: Record<string, string>
    teams: Team[] | []
    judges: UserData[] | []
    roomDetails: RoomDetails[] | []
    tournamentStatus: TOURNAMENT_STATUS
}

export enum TOURNAMENT_STATUS{
    NEW,
    OPEN,
    IN_PROGRESS,
    CLOSED
}

export interface CreateTournamentRequest{
    name: string
    topics: Record<string, string>
}

export interface UpdateTournamentRequest{
    id: string
    name: string
    topics: Record<string, string>
}