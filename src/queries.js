import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation login($data: LoginInput!) {
		login(data: $data) {
			user {
				id
				email
				username
				name
			}
			token
		}
	}
`;

export const REGISTER = gql`
	mutation register($data: RegisterInput!) {
		register(data: $data) {
			user {
				id
				email
				username
				name
			}
			token
		}
	}
`;

export const GET_ALL_MODELS = gql`
	query getAllModelsPublic {
		getAllModelsPublic {
			username
			avatar
		}
	}
`;

export const GET_ALL_LIVE_SESSIONS = gql`
	query getAllActiveLiveSessions {
		getAllActiveLiveSessions {
			id
			title
			status
			model {
				username
				avatar
			}
		}
	}
`;

export const GET_MODEL_ACTIVE_LIVE_SESSION = gql`
	query getModelActiveSessionByUsername($username: String!) {
		getModelActiveSessionByUsername(username: $username) {
			id
			title
			status
			goals {
				id
				title
				isAchived
				tokensAchived
				tokenValue
				createdAt
			}
		}
	}
`;

export const GET_SESSION_GOAL = gql`
	query getSessionGoal($sessionId: Float!) {
		getSessionGoal(sessionId: $sessionId) {
			id
			title
			isAchived
			tokensAchived
			tokenValue
		}
	}
`;

export const HELLO = gql`
	query hello {
		hello
	}
`;

export const GET_RTP_CAPABILITIES = gql`
	mutation getRtpCapabilities {
		getRtpCapabilities
	}
`;

export const CREATE_PRODUCER_TRANSPORT = gql`
	mutation createProducerTransport($modelId: String!) {
		createProducerTransport(modelId: $modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
		}
	}
`;

export const CONNECT_PRODUCER_TRANSPORT = gql`
	mutation ConnectProducerTransport($transportId: String!, $dtlsParameters: String!) {
		connectProducerTransport(transportId: $transportId, dtlsParameters: $dtlsParameters)
	}
`;

export const START_PRODUCING = gql`
	mutation startProducing($transportId: String!, $rtpParameters: String!, $kind: String!) {
		startProducing(transportId: $transportId, rtpParameters: $rtpParameters, kind: $kind)
	}
`;

export const CREATE_CONSUMER_TRANSPORT = gql`
	mutation createConsumerTransport($clientId: String!, $modelId: String!) {
		createConsumerTransport(clientId: $clientId, modelId: $modelId) {
			id
			iceParameters
			iceCandidates
			dtlsParameters
			sessionId
		}
	}
`;

export const CONSUME_MEDIA = gql`
	mutation consumeMedia($rtpCapabilities: String!, $clientId: String!, $modelId: String!, $kind: String!) {
		consumeMedia(rtpCapabilities: $rtpCapabilities, clientId: $clientId, modelId: $modelId, kind: $kind) {
			producerId
			id
			kind
			rtpParameters
		}
	}
`;

export const CONNECT_CONSUMER_TRANSPORT = gql`
	mutation connectConsumerTransport($clientId: String!, $modelId: String!, $dtlsParameters: String!) {
		connectConsumerTransport(clientId: $clientId, modelId: $modelId, dtlsParameters: $dtlsParameters)
	}
`;

export const UNPAUSE_CONSUMER = gql`
	mutation unpauseConsumer($clientId: String!, $modelId: String!, $kind: String!) {
		unpauseConsumer(clientId: $clientId, modelId: $modelId, kind: $kind)
	}
`;
