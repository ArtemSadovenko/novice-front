import React, { useEffect, useState } from 'react'
import { UserData } from '../types/auth';
import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createTeam } from '../api/teamApi';
import { CreateTeamRequest, Team } from '../types/team';
import { useAuth } from '../context/AuthContext';
import { FastForward } from '@mui/icons-material';

type JoinTournamentDialog = {
    isVisible: boolean;
    users: UserData[];
    createTeam: (team: CreateTeamRequest) => boolean
    tournamentId: string;
}

function JoinTournamentDialog({
    isVisible = false,
    users,
    createTeam,
    tournamentId
}: JoinTournamentDialog) {
    const auth = useAuth()
    const [team, setTeam] = useState<CreateTeamRequest>({
        tournamentId: tournamentId,
        teamMembers: [],
        name: ""
    })

    const [teamMateId, setTeamMateId] = useState<String>()

    const [loading, setLoading] = useState(false)



    return (
        <Dialog open={isVisible}>
            <DialogTitle>
                Join as Team
            </DialogTitle>
            <DialogContent>
                {loading ? <div>Loading...</div> : (
                    <Box>
                        <TextField
                            label="Team Name"
                            fullWidth
                            onChange={(e) => {
                                setTeam((prev) => ({ ...prev, name: e.target.value.trim() }));
                            }}
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="select-member-label">Select Member</InputLabel>
                            <Select
                                labelId="select-member-label"
                                value={teamMateId}
                                label="Select Member"
                                onChange={(e) => {
                                    setTeamMateId(e.target.value)
                                }}
                            >
                                {users.map(user => (
                                    <MenuItem key={user.id} value={user.id}>
                                        {user.username}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button sx={{ width: "100%" }} variant='contained' onClick={() => {
                            try {
                                if (auth.currentUser) {
                                    team.teamMembers.push(auth.currentUser)
                                }
                                if (!teamMateId || team.name.length < 2) {
                                    throw Error("Wrong input")
                                }
                                const teamMate = users.find(e => e.id === teamMateId);
                                if (teamMate) {
                                    team.teamMembers.push(teamMate);
                                }

                                createTeam(team)
                                isVisible = false

                            } catch (e) {

                            }
                            finally {
                                setTeam({
                                    name: "",
                                    teamMembers: [],
                                    tournamentId: tournamentId
                                })
                            }
                        }}> Confirm</Button>
                    </Box>
                )}
            </DialogContent>
        </Dialog >
    )
}

export default JoinTournamentDialog
