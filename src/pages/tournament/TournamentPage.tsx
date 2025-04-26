import React, { useEffect, useState } from 'react'
import withDashboardLayout from '../../components/withDashboardLayout'
import { useParams } from 'react-router-dom';
import { Tournament } from '../../types/tournament';
import { getTournamentById } from '../../api/tournamentApi';
import { Box, CircularProgress, Typography } from '@mui/material';

function TournamentPage() {
    const { id } = useParams<{ id: string }>();
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchtournament = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const data = await getTournamentById(id);
                setTournament(data);
                setError(null);
            } catch (err) {
                setError('Failed to load user data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchtournament();
    }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }


    if (error || !tournament) {
      return (
        <Box sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="h6" color="error">
            {error || 'User not found'}
          </Typography>
        </Box>
      );
    }

    return (
        <Box>
            <Box>
                    <Typography>{tournament.name}</Typography>
                </Box>
                
        </Box>
    )
}

export default withDashboardLayout(TournamentPage)
