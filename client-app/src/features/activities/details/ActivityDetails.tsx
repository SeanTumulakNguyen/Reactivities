import React, { useContext, useEffect } from 'react';
import { Card, Image, Button, Grid, GridColumn } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { Link } from 'react-router-dom';
import { ActivityDetailedHeader } from './ActivityDetailedHeader';
import { ActivityDetailedInfo } from './ActivityDetailedInfo';
import { ActivityDetailedChat } from './ActivityDetailedChat';
import { ActivityDetailedSidebar } from './ActivityDetailedSidebar';

interface DetailParams {
	id: string;
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match, history }) => {
	const activityStore = useContext(ActivityStore);
	const { activity, loadActivity, loadingInitial } = activityStore;

	useEffect(
		() => {
			loadActivity(match.params.id);
		},
		[ loadActivity, match.params.id ]
	);

	if (loadingInitial || !activity) return <LoadingComponent content="Loading Activity..." />;

	return (
		<Grid>
			<GridColumn width={10}>
				<ActivityDetailedHeader />
				<ActivityDetailedInfo />
				<ActivityDetailedChat />
			</GridColumn>
			<GridColumn width={6}>
				<ActivityDetailedSidebar />
			</GridColumn>
		</Grid>
	);
};

export default observer(ActivityDetails);
